package himedia.project.erpro.user.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {
    ROLE_SUPERADMIN("최고관리자"),
    ROLE_ADMIN("관리자"),
    ROLE_MEMBER("직원");

    private final String kor;
}
