package himedia.project.erpro.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	public User save(User user);
	public Optional<User> findById(Long id);
}
