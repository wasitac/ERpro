package himedia.project.erpro.user.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import himedia.project.erpro.trade.entity.Account;
import himedia.project.erpro.user.dto.Password;
import himedia.project.erpro.user.dto.Profile;
import himedia.project.erpro.user.entity.User;
import himedia.project.erpro.user.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	private final UserRepository userRepository;
	private final ModelMapper modelMapper;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;

	// 사원목록 조회 - 김주원
	public List<User> getUserAll() {
		List<User> userList = userRepository.findAll();
		return userList;
	}
	
	// 사원 상세 정보 조회 - 김주원
	public Optional<User> getUserById(Long userId) {
		Optional<User> user = userRepository.findById(userId);
		return user;
	}

	// 사원 추가 - 김주원
	public String createUser(User user) {
		String email = user.getEmail();
		String password = user.getPassword();

		// 이메일 중복 확인
		Boolean isExist = userRepository.existsByEmail(email);
		if(isExist) {
			return "이메일이 중복됩니다.";
		}

		user.setPassword(bCryptPasswordEncoder.encode(password));
		userRepository.save(user);

		return "success";
	}
	
	// 사원 대장 수정
	public Optional<User> updateUser(User user) {
		Optional<User> existUser = userRepository.findById(user.getId());
		
		if(existUser.isPresent()) {
			User updateUser = existUser.get();

			// 모든 필드를 업데이트
			BeanUtils.copyProperties(user, updateUser);

			userRepository.save(updateUser);
			return Optional.of(updateUser);
		} else {
			return Optional.empty();
		}
	}
	
	// 사원 대장 삭제
	public List<User> deleteUser(Long id) {
		Optional<User> existAccount = userRepository.findById(id); 
		if(existAccount.isPresent()) {
			userRepository.deleteById(id);
			return userRepository.findAll();
		} else {
			 throw new EntityNotFoundException("존재하지 않는 아이디 입니다.");
		}
	}

	// 사원 대장 다중 삭제
	public boolean deleteUserList(List<Long> idList) {
		int deletedCount = userRepository.deleteAllByIdIn(idList);
		if(deletedCount > 0 && deletedCount == idList.size()) {
			return true;
		} else {
			return false;
		}
	}

	// 프로필 가져오기 - 이지홍
	public Profile getUserProfile(Long userId) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userId));
		Profile profile = modelMapper.map(user, Profile.class);
		return profile;
	}

	// 내 정보 수정 - 이지홍
	public void updateProfile(Long userId, Profile profile) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userId));
		user = modelMapper.map(profile, User.class);
		userRepository.save(user);
	}

	// 비밀번호 수정 - 이지홍
	public void updatePassword(Long userId, Password password) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new EntityNotFoundException("User not found with ID: " + userId));
		
		if (user.getPassword().equals(password.getPassword())) {
			user.setPassword(password.getNewPassword());
			userRepository.save(user);
			return;
		} 
		// 비밀번호가 틀렸을 경우 추가
	}
	
}
