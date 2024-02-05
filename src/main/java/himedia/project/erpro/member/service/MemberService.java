package himedia.project.erpro.member.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import himedia.project.erpro.member.dto.MemberDto;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;

import himedia.project.erpro.email.dto.EmailDto;
import himedia.project.erpro.email.service.EmailService;
import himedia.project.erpro.member.entity.Member;
import himedia.project.erpro.member.repository.MemberRepository;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
	private final MemberRepository memberRepository;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	private final EmailService emailService;

	// 사원목록 조회 - 김주원
	public List<MemberDto> getMemberAll() {
		List<Member> memberList = memberRepository.findAll();
		List<MemberDto> memberDtoList = memberList.stream().map(Member::toDto).collect(Collectors.toList());
		return memberDtoList;
	}
	
	// 사원 상세 정보 조회 - 김주원
	public MemberDto getMemberById(Long memberId) {
		MemberDto memberDto = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId))
				.toFormDto();

		return memberDto;
	}

	// 사원 추가 - 김주원
	public String createMember(MemberDto memberDto) {
		String email = memberDto.getEmail();
		String password = memberDto.getPassword();

		// 이메일 중복 확인
		Boolean isExist = memberRepository.existsByEmail(email);
		if(isExist) {
			return "이메일이 중복됩니다.";
		}

		memberDto.setPassword(bCryptPasswordEncoder.encode(password));
		Member saveMember = memberRepository.save(memberDto.toEntity());

		try {
			// 생성된 ID, PW 메일발송
			EmailDto emailDto = new EmailDto();
			emailDto.setMailAddr(email);
			emailDto.setMailTitle("ERPRO 사원이 등록 되셨습니다.");
			emailDto.setTemplateFile("member");
			Context context = new Context();
			context.setVariable("memberId", saveMember.getId() );
			context.setVariable("password", password );

			emailDto.setContext(context);
			emailService.sendMailTemplate(emailDto);

			return "success";
		} catch (MessagingException e) {
			return e.getMessage();
		}
	}
	
	// 사원 대장 수정
	public Optional<MemberDto> updateMember(MemberDto memberDto) {

		Optional<Member> existMember = memberRepository.findById(memberDto.getId());
		
		if(existMember.isPresent()) {
			MemberDto updateMemberDto= existMember.get().toDto();

			// 비밀번호 제외한 필드를 수동으로 업데이트
			updateMemberDto.setName(memberDto.getName());
			updateMemberDto.setBirthDate(memberDto.getBirthDate());
			updateMemberDto.setPhone(memberDto.getPhone());
			updateMemberDto.setEmail(memberDto.getEmail());
			updateMemberDto.setDepartment(memberDto.getDepartment());
			updateMemberDto.setMemberRank(memberDto.getMemberRank());
			updateMemberDto.setRole(memberDto.getRole());
			updateMemberDto.setWorkType(memberDto.getWorkType());
			updateMemberDto.setInsertDate(memberDto.getInsertDate());
			updateMemberDto.setRetireDate(memberDto.getRetireDate());

			memberRepository.save(updateMemberDto.toEntity());
			return Optional.of(updateMemberDto);
		} else {
			return Optional.empty();
		}
	}

	// 사원 대장 다중 삭제
	public boolean deleteMemberList(List<Long> idList) {
		int deletedCount = memberRepository.deleteAllByIdIn(idList);
		if(deletedCount > 0 && deletedCount == idList.size()) {
			return true;
		} else {
			return false;
		}
	}

	
}
