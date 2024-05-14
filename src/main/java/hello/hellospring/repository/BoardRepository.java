package hello.hellospring.repository;

import hello.hellospring.domain.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface BoardRepository extends JpaRepository<Board, Long> {
    Page<Board> findAll(Pageable pageable);

    Optional<List<Board>> findAllByMemberId(Long memberId);

    Optional<List<Board>> findAllByTitleContaining(String keyword);

    Optional<List<Board>> findAllByContentContaining(String keyword);


}