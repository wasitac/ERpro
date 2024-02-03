//package himedia.project.erpro.common;
//
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
//import java.sql.Date;
//
//import jakarta.persistence.Embeddable;
//
//@Embeddable
//public class DateFormat {
//	SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//
//	public String toStr(Date date) {
//		String strDate = dateFormat.format(date);
//		return strDate;
//	}
//	
//	public Date toDate(String strDate) {
//		try {
//			Date date = dateFormat.parse(strDate);
//			return date;
//		} catch (ParseException e) {
//			e.printStackTrace();
//		}
//		return null;
//	}
//	
//}
