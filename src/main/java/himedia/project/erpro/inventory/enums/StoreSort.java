package himedia.project.erpro.inventory.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

//이지홍
@Getter
@RequiredArgsConstructor
public enum StoreSort {
	IN("입고"),
	OUT("출고");
	
	private final String kor;
	
	public static StoreSort fromKor(String kor) {
        for (StoreSort storeSort : StoreSort.values()) {
            if (storeSort.getKor().equalsIgnoreCase(kor)) {
                return storeSort;
            }
        }
        throw new IllegalArgumentException("Invalid StoreSort: " + kor);
    }
}