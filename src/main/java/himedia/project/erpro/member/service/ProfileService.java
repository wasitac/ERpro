package himedia.project.erpro.member.service;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
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
		ProfileFormDto profile = mapper.toDto(member, ProfileFormDto.class);
		return profile;
	}

	// 내 정보 수정 - 이지홍
	public void updateProfile(ProfileFormDto profile) {
		Long memberId = getMemberId();
		Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId));
		member = mapper.toDto(profile, Member.class);
		memberRepository.save(member);
	}

	// 비밀번호 수정 - 이지홍
	public void updatePassword(PasswordFormDto password) {
		Long memberId = getMemberId();
		Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId));
		
		MemberDto memberDto = mapper.toDto(member, MemberDto.class);
 
		if (memberDto.getPassword().equals(password.getPassword())) {
			memberDto.setPassword(password.getNewPassword());
			member = mapper.toEntity(memberDto, Member.class);
			memberRepository.save(member);
			return;
		} 
		System.out.println(memberDto.getName());
		// 비밀번호가 틀렸을 경우 추가
	}
}
