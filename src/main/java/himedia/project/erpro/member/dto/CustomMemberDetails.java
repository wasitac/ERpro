package himedia.project.erpro.member.dto;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class CustomMemberDetails implements UserDetails {

    private final MemberDto memberDto;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return Collections.singletonList(new SimpleGrantedAuthority(memberDto.getRole().toString()));
    }

    @Override
    public String getPassword() {
        return memberDto.getPassword();
    }

    @Override
    public String getUsername() {
        return memberDto.getId().toString();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getName() {
        return memberDto.getName();
    }
    public Date getBirth() {
        return memberDto.getBirth();
    }
    public String getPhone() {
        return memberDto.getPhone();
    }
    public String getEmail() {
        return memberDto.getEmail();
    }

    public String getDepartment() {
        return memberDto.getDepartment();
    }

    public String getMemberRank() {
        return memberDto.getMemberRank();
    }
    
    public Date getInsertDate() {
        return memberDto.getInsertDate();
    }
    
    


}
