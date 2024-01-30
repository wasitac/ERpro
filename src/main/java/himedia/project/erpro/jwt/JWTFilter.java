package himedia.project.erpro.jwt;

import himedia.project.erpro.member.dto.CustomMemberDetails;
import himedia.project.erpro.member.entity.Member;
import himedia.project.erpro.member.enums.Role;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@RequiredArgsConstructor
public class JWTFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        //request에서 Authorization 헤더를 찾음
        String authorization= request.getHeader("Authorization");

        //Authorization 헤더 검증
        if (authorization == null || !authorization.startsWith("Bearer ")) {

            filterChain.doFilter(request, response);

            //조건이 해당되면 메소드 종료
            return;
        }

        String token = authorization.split(" ")[1];

        //토큰 소멸 시간 검증
        if (jwtUtil.isExpired(token)) {

            System.out.println("token expired");
            filterChain.doFilter(request, response);

            //조건이 해당되면 메소드 종료
            return;
        }

        // 토큰에서 계정정보와 role 획득
        String memberId = jwtUtil.getMemberId(token);
        String role = jwtUtil.getRole(token);

        // User Entity를 생성하여 값 set
        Member member = new Member();
        member.setId(Long.parseLong(memberId));
        member.setPassword(""); //password 강제로 입력 필요, 매번 DB조회는 부담으로 null값 강제 입력
        member.setRole(Role.valueOf(role));

        // CustomUserDetails에 사원 정보 객체 담기
        CustomMemberDetails customMemberDetails = new CustomMemberDetails(member);

        // 스프링 시큐리티 인증 토근 생성
        Authentication authToken = new UsernamePasswordAuthenticationToken(customMemberDetails, null, customMemberDetails.getAuthorities());

        // 세션에 사용자 등록
        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);
    }
}
