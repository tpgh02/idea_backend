package hello.hellospring.repository;

import hello.hellospring.domain.Board;
import hello.hellospring.domain.Member;
import hello.hellospring.domain.MemberClassify;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findById(Long id);
    Optional<Member> findByName(String name);
    List<Member> findAll();
    Optional<Member> findByEmail(String email);

    Long countByMemberClassify(MemberClassify memberClassify);
    Page<Member> findAllByMemberClassify(MemberClassify memberClassify,
                                         Pageable pageable);

    Optional<List<Member>> findAllByNameContaining(String keyword);

    Optional<List<Member>> findAllByLanguageContaining(String keyword);
}
