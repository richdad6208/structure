import { Input, InputWrapper } from "@mantine/core";
import { Controller, useForm } from "react-hook-form";

export default function SignupForm() {
  const { control } = useForm();

  return (
    <form>
      {[
        { label: "이메일", name: "email" },
        { label: "비밀번호", name: "password" },
        { label: "비밀번호 확인", name: "pw-check" },
        { label: "유저네임", name: "username" },
      ].map((it, idx) => (
        <div key={idx}>
          <Controller
            name={it.name}
            control={control}
            render={({ field }) => (
              <InputWrapper label={it.label}>
                <Input value={field.value} onChange={field.onChange} />
              </InputWrapper>
            )}
          />
        </div>
      ))}
    </form>
  );
}
