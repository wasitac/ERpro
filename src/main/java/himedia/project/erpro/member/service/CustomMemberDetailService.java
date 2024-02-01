package himedia.project.erpro.member.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import himedia.project.erpro.common.CustomMapper;
import himedia.project.erpro.member.dto.CustomMemberDetails;
import himedia.project.erpro.member.dto.MemberDto;
import himedia.project.erpro.member.entity.Member;
import himedia.project.erpro.member.repository.MemberRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomMemberDetailService implements UserDetailsService {

    private final MemberRepository memberRepository;
    private final CustomMapper mapper;
    @Override
    public UserDetails loadUserByUsername(String memberId) throws UsernameNotFoundException {

        Member member = memberRepository.findById(Long.parseLong(memberId))
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + memberId));
        MemberDto memberDto = mapper.map(member, MemberDto.class);
        if(member != null) {
            return new CustomMemberDetails(memberDto);
        }

        return null;
    }
}
