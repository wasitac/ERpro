package himedia.project.erpro.email.dto;

import lombok.Getter;
import lombok.Setter;
import org.thymeleaf.context.Context;

@Getter
@Setter
public class EmailDto {

    private String mailAddr;        // 메일 수신자 주소
    private String mailTitle;       // 메일 제목
    private String mailContents;    // 텍스트 형태의 메일 본문
    private String templateFile;    // template 내 thymeleaf 파일명
    private Context context;        // thymeleaf 전달 데이터
}
