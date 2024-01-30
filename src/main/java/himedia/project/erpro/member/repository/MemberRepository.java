package himedia.project.erpro.member.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import himedia.project.erpro.member.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long>{
	public List<Member> findAll();
	public boolean existsByEmail(String email);
	public Optional<Member> findById(Long id);
	// 거래처 목록 삭제
	public int deleteAllByIdIn(List<Long> idList);
}
