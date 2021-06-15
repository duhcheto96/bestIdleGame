package game.idle.entities;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class User extends BaseEntity {
    private Role role;
    private String username;
    private String password;

    public User() {
    }

    @Column
    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Column
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Column
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
