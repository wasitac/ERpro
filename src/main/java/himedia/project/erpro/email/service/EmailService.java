package himedia.project.erpro.email.service;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring6.SpringTemplateEngine;

import himedia.project.erpro.email.dto.EmailDto;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;

// 김주원
@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender javaMailSender;
    private final SpringTemplateEngine templateEngine;

    // 문자형태 메일 발송
    public void sendMailText(EmailDto mailDto) throws MessagingException {

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");
        messageHelper.setTo(mailDto.getMailAddr());
        messageHelper.setSubject(mailDto.getMailTitle());
        messageHelper.setText(mailDto.getMailContents(), true);

        javaMailSender.send(message);

    }

    // thymeleaf를 활용한 메일 발송
    public void sendMailTemplate(EmailDto mailDto) throws MessagingException {

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper = new MimeMessageHelper(message, false, "UTF-8");
        messageHelper.setTo(mailDto.getMailAddr());  // 메일 수신자
        messageHelper.setSubject(mailDto.getMailTitle());  // 메일 제목
        
        // thymeleaf를 통한 메일본문 html 적용
        messageHelper.setText(templateEngine.process(mailDto.getTemplateFile(), mailDto.getContext()), true);  // 메일본문

        javaMailSender.send(message);

    }

}
