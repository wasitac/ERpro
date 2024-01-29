package himedia.project.erpro.user.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	public List<User> findAll();
	public boolean existsByEmail(String email);
	public Optional<User> findById(Long id);
}
