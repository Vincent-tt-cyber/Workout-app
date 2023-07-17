import { useState } from "react";
import { Layout } from "../../Layout/Layout";
import { useForm } from "react-hook-form";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";

export const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Layout heading="Sign in" bgImage="/images/auth-bg.jpg">
        <div className="wrapper-inner-page">
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
            <Button>Let's go</Button>
          </form>
        </div>
      </Layout>
    </>
  );
};
