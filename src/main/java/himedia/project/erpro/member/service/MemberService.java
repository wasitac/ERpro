package himedia.project.erpro.member.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import himedia.project.erpro.member.dto.Password;
import himedia.project.erpro.member.dto.Profile;
import himedia.project.erpro.member.entity.Member;
import himedia.project.erpro.member.repository.MemberRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {
	private final MemberRepository memberRepository;
	private final ModelMapper modelMapper;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;

	// 사원목록 조회 - 김주원
	public List<Member> getMemberAll() {
		List<Member> memberList = memberRepository.findAll();
		return memberList;
	}
	
	// 사원 상세 정보 조회 - 김주원
	public Optional<Member> getMemberById(Long memberId) {
		Optional<Member> member = memberRepository.findById(memberId);
		return member;
	}

	// 사원 추가 - 김주원
	public String createMember(Member member) {
		String email = member.getEmail();
		String password = member.getPassword();

		// 이메일 중복 확인
		Boolean isExist = memberRepository.existsByEmail(email);
		if(isExist) {
			return "이메일이 중복됩니다.";
		}

		member.setPassword(bCryptPasswordEncoder.encode(password));
		memberRepository.save(member);

		return "success";
	}
	
	// 사원 대장 수정
	public Optional<Member> updateMember(Member member) {
		Optional<Member> existMember = memberRepository.findById(member.getId());
		
		if(existMember.isPresent()) {
			Member updateMember = existMember.get();

			// 비밀번호 제외한 필드를 수동으로 업데이트
			updateMember.setName(member.getName());
			updateMember.setBirth(member.getBirth());
			updateMember.setPhone(member.getPhone());
			updateMember.setEmail(member.getEmail());
			updateMember.setDepartment(member.getDepartment());
			updateMember.setMemberRank(member.getMemberRank());
			updateMember.setRole(member.getRole());
			updateMember.setWorkType(member.getWorkType());
			updateMember.setInsertDate(member.getInsertDate());
			updateMember.setRetireDate(member.getRetireDate());

			memberRepository.save(updateMember);
			return Optional.of(updateMember);
		} else {
			return Optional.empty();
		}
	}
	
	// 사원 대장 삭제
	public List<Member> deleteMember(Long id) {
		Optional<Member> existAccount = memberRepository.findById(id); 
		if(existAccount.isPresent()) {
			memberRepository.deleteById(id);
			return memberRepository.findAll();
		} else {
			 throw new EntityNotFoundException("존재하지 않는 아이디 입니다.");
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

	// 프로필 가져오기 - 이지홍
	public Profile getMemberProfile(Long memberId) {
		Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId));
		Profile profile = modelMapper.map(member, Profile.class);
		return profile;
	}

	// 내 정보 수정 - 이지홍
	public void updateProfile(Long memberId, Profile profile) {
		Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId));
		member = modelMapper.map(profile, Member.class);
		memberRepository.save(member);
	}

	// 비밀번호 수정 - 이지홍
	public void updatePassword(Long memberId, Password password) {
		Member member = memberRepository.findById(memberId)
				.orElseThrow(() -> new EntityNotFoundException("Member not found with ID: " + memberId));
		
		if (member.getPassword().equals(password.getPassword())) {
			member.setPassword(password.getNewPassword());
			memberRepository.save(member);
			return;
		} 
		System.out.println(member.getName());
		// 비밀번호가 틀렸을 경우 추가
	}
	
}
