import styles from "./Auth.module.scss";
import { useState } from "react";
import { Layout } from "../../Layout/Layout";
import { useForm } from "react-hook-form";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import { Loader } from "../../UI/Loader/Loader";

export const Auth = () => {
  const [type, setType] = useState("auth");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const isLoading = false;
  const isLoadingAuth = false;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Layout heading="Sign in" bgImage="/images/auth-bg.jpg" />
      <div className="wrapper-inner-page">
        {(isLoading || isLoadingAuth) && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors?.email?.message}
            name="email"
            type="text"
            register={register}
            options={{
              required: "Email is required",
            }}
            placeholder="Enter email"
          />
          <Input
            error={errors?.password?.message}
            name="password"
            type="password"
            register={register}
            options={{
              required: "Password is required",
            }}
            placeholder="Enter password"
          />
          <div className={styles.wrapperButtons}>
            <Button clickHandler={() => setType("auth")}>Sing in</Button>
            <Button clickHandler={() => setType("reg")}>Sign up</Button>
          </div>
        </form>
      </div>
    </>
  );
};
