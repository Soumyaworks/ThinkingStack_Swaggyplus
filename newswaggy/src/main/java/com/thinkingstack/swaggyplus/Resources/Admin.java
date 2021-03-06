package com.thinkingstack.swaggyplus.Resources;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Admin {
	@Id
	@GeneratedValue
	private Long adminId;
	private String name;
	private String password;
	public Admin() {
		
	}
	public Admin(Long adminId, String name, String password) {
		super();
		this.adminId = adminId;
		this.name = name;
		this.password = password;
	}
	
	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}
	
	public Long getAdminId() {
		return adminId;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getPassword() {
		return password;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", name=" + name + ", password=" + password + "]";
	}

}
