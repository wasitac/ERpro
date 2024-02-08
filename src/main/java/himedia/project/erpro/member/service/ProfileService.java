package himedia.project.erpro.member.service;

import java.util.Optional;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import himedia.project.erpro.common.Message;
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

	private Long getMemberId() {
		return Long.parseLong(SecurityContextHolder.getContext().getAuthentication().getName());
	}

	// 내 정보 수정 - 이지홍
	public Message<String> updateProfile(ProfileFormDto profile) {
		Long memberId = getMemberId();

		Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId))
				.updateProfile(profile);

		try {
			member = memberRepository.save(member);
			return new Message("내 정보 변경에 성공했습니다");
		} catch (Exception e) {
			e.printStackTrace();
			return new Message(null, "내 정보 변경에 실패했습니다", null);
		}

	}

	// 비밀번호 수정 - 이지홍
	public Message<String> updatePassword(PasswordFormDto password) {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

		Long memberId = getMemberId();
		Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId));

		Message<String> message = null;

		// 입력 비밀번호가 저장된 비밀번호와 일치한다면 newPassword로 변경
		if (bCryptPasswordEncoder.matches(password.getPassword(), member.getPassword())) {

			if (password.getPassword().equals(password.getNewPassword())) {
				return new Message(null, "같은 비밀번호로 변경할 수 없습니다", null);
			}

			member = member.updatePassword(bCryptPasswordEncoder.encode(password.getNewPassword()));
			Optional<Member> result = Optional.ofNullable(memberRepository.save(member));

			if (result.isPresent()) {
				return new Message("비밀번호 변경에 성공했습니다", null);
			}

			return new Message(null, "비밀번호 변경실패", null);
		}
		return new Message(null, "비밀번호가 일치하지 않습니다", null);

	}
}
