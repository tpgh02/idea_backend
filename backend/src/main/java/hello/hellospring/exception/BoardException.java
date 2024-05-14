package hello.hellospring.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class BoardException extends RuntimeException {
    public BoardException(String message) {
        super(message);
    }
}
