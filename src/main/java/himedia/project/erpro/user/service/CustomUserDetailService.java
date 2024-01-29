package himedia.project.erpro.user.service;

import himedia.project.erpro.user.dto.CustomUserDetails;
import himedia.project.erpro.user.entity.User;
import himedia.project.erpro.user.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {

        User user = userRepository.findById(Long.parseLong(userId))
                .orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userId));

        if(user != null) {
            return new CustomUserDetails(user);
        }

        return null;
    }
}
