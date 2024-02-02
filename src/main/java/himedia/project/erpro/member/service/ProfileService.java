package himedia.project.erpro.member.service;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.common.Message;
import himedia.project.erpro.member.dto.MemberDto;
import himedia.project.erpro.member.dto.PasswordFormDto;
import himedia.project.erpro.member.dto.ProfileFormDto;
import himedia.project.erpro.member.entity.Member;
import himedia.project.erpro.member.repository.MemberRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProfileService {
	private final MemberRepository memberRepository;
	private final CustomMapper mapper;
	
	private Long getMemberId() {
		return Long.parseLong(SecurityContextHolder.getContext().getAuthentication().getName());
	}

	// 프로필 가져오기 - 이지홍
	public ProfileFormDto getMemberProfile() {
		Long memberId = getMemberId();
		Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId));
		ProfileFormDto profile = mapper.map(member, ProfileFormDto.class);
		return profile;
	}

	// 내 정보 수정 - 이지홍
	public Message<String> updateProfile(ProfileFormDto profile) {
		Long memberId = getMemberId();
		Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId));
		mapper.map(profile, member);
		Member updateMember = null;
		Message<String> message = null;
		 try {
			 updateMember = memberRepository.save(member);
			 message = new Message("내 정보 변경에 성공했습니다");
	        } catch (Exception e) {
	            e.printStackTrace();
	            message = new Message("", "내 정보 변경에 실패했습니다", null);
	        }
		 return message;
		
	}

	// 비밀번호 수정 - 이지홍
	public Message<String> updatePassword(PasswordFormDto password) {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

		Long memberId = getMemberId();
		Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId));
		MemberDto memberDto = mapper.map(member, MemberDto.class);
		Message<String> message = null;
		// 입력 비밀번호가 저장된 비밀번호와 일치한다면 newPassword로 변경
		if (bCryptPasswordEncoder.matches(password.getPassword(), member.getPassword())) {
			if(password.getPassword().equals(password.getNewPassword())) {
				message = new Message("", "같은 비밀번호로 변경할 수 없습니다", null);
			}
			memberDto.setPassword(bCryptPasswordEncoder.encode(password.getNewPassword()));			
			Member updateMember = mapper.map(memberDto, Member.class);			
			Optional<Member> result = Optional.ofNullable(memberRepository.save(updateMember));
			if(result.isPresent()) {
				message = new Message("비밀번호 변경에 성공했습니다", null);			
			} 
			message = new Message("", "비밀번호 변경실패", null);	
		}
		message = new Message("", "비밀번호가 일치하지 않습니다", null);
		return message;				
	}
}
