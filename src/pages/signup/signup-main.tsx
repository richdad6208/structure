import { tw } from "@/config/constants/CONSTANTS";
import SignupForm from "@/domain/user/components/signup-form";

export default function SignupMain() {
  return (
    <div className={`${tw.layout.content}`}>
      <div className="space-y-10">
        <h2 className={tw.font.h2}>회원가입</h2>
        <SignupForm />
      </div>
    </div>
  );
}
