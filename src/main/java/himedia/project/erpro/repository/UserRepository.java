package himedia.project.erpro.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import himedia.project.erpro.entity.User;

//public interface UserRepository {
//	User save(User user);
//	Optional<User> findById(Long id);
//}
@Repository
public class UserRepository {
	public User save(User user) {
		return user;
	};
	public Optional<User> findById(Long id){
		User user = null;
		return Optional.ofNullable(user);
	};
}
