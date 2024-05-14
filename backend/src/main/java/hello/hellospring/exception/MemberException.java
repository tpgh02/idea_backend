package hello.hellospring.exception;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class MemberException extends RuntimeException {
    public MemberException(String message) {
        super(message);
    }
}
