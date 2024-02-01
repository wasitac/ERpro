package himedia.project.erpro.common;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import java.nio.charset.StandardCharsets;


@Getter
@Setter
@ToString
public class Message <T>{
  
  private final static HttpHeaders headers = new HttpHeaders();
  
  static {
    headers.setContentType(new MediaType("application", "json", StandardCharsets.UTF_8));
  }
  
  private String message;
  
  private String errorMessage;
  
  private T data;
  
  public Message()
  {
    this.data = null;
    this.message = null;
  }
  
  public Message(String errorMessage)
  {
	this.errorMessage = errorMessage;
  }
  
  public Message(String message, T data)
  {
    this.message = message;
    this.data = data;
  }
  
  public Message(String message, String errorMessage, T data)
  {
    this.message = message;
    this.errorMessage = errorMessage;
    this.data = data;
  }
  
}