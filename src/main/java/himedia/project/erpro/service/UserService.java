package himedia.project.erpro.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import himedia.project.erpro.dto.Password;
import himedia.project.erpro.dto.Profile;
import himedia.project.erpro.entity.User;
import himedia.project.erpro.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	private final UserRepository userRepository;

	public void updateProfile(Long userId, Profile profile) {
		Optional<User> findUser = userRepository.findById(userId);
		if (findUser.isPresent()) {
			User user = findUser.get();
				user.setName(profile.getName());
				userRepository.save(user);
		}
	}

	public void updatePassword(Long userId, Password password) {
		Optional<User> findUser = userRepository.findById(userId);
		if (findUser.isPresent()) {
			User user = findUser.get();
			// 현재 비밀번호와 입력한 비밀번호가 일치하는지 검사
			if (user.getPassword().equals(password.getPassword())) {
				user.setPassword(password.getNewPassword());
				userRepository.save(user);
			}
		}

	}
}
