package himedia.project.erpro.member.service;

import himedia.project.erpro.member.dto.MemberDto;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;

import himedia.project.erpro.email.dto.EmailDto;
import himedia.project.erpro.email.service.EmailService;
import himedia.project.erpro.member.entity.Member;
import himedia.project.erpro.member.repository.MemberRepository;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final MemberRepository memberRepository;
    private final EmailService emailService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public String findPassword(Long id) {

        // 사번 존재 확인
        Boolean isExist = memberRepository.existsById(id);
        if(!isExist) {
            return "입력하신 사번이 존재하지 않습니다.";
        }

        MemberDto findMemberDto = memberRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + id))
                .toFormDto();

        // 임시 비밀번호 생성
        String tempPassword = RandomStringUtils.randomAlphanumeric(8);

        // member table에 암호화된 비밀번호 update
        findMemberDto.setPassword(bCryptPasswordEncoder.encode(tempPassword));
        memberRepository.save(findMemberDto.toEntity());

        // 임시비밀번호 메일발송
        try {
            EmailDto emailDto = new EmailDto();
            emailDto.setMailAddr(findMemberDto.getEmail());
            emailDto.setMailTitle("ERPRO 임시 비밀번호 보내드립니다.");
            emailDto.setTemplateFile("password");

            Context context = new Context();
            context.setVariable("password", tempPassword );
            emailDto.setContext(context);

            emailService.sendMailTemplate(emailDto);

            return "success";
        } catch (MessagingException e) {
            return e.getMessage();
        }
    }
}
