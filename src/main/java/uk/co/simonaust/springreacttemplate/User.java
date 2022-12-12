package uk.co.simonaust.springreacttemplate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
/** A simple POJO representing a User */
public class User {
  private String id;
  private String name;
  private String email;
}
