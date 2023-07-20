"use client"
import HomeSection from "./Section";
import SectionTitle from "./SectionTitle";
import SectionButton from "./SectionButton";

import Modal from "@/components/Modal";
import { useState } from "react";
import { Formik, Form, Field, FormikProps, FieldProps } from "formik";
import Label from "../Label";
import FormGroup from "../FormGroup";

const Input = ({ field, form, ...props }: FieldProps) => {
  return <input className="flex w-full border-b-2 border-light-blue dark:border-red p-2 py-1 bg-black/5 shadow-sm min-w-[248px]" {...field} {...props} />;
};

export default function LeaveYourIdeaSection() {

  const [open, setOpen] = useState(false);

  return (
    <HomeSection>
      <SectionTitle as="h2" size="medium">
        Don't See Your Favorite Minigame?
      </SectionTitle>
      <SectionButton onClick={() => setOpen(true)}>
        Leave Your Game Idea Now!
      </SectionButton>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <Formik
          initialValues={{
            email: "",
            howToPlay: ""
          }}
          onSubmit={() => {
            console.log("Hello")
          }}
        >
          {(props: FormikProps<any>) => (
            <Form className="flex flex-col w-full gap-4 text-sm">
              <div className="flex gap-2">
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Field type="email" name="email" component={Input} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="game_name">Game name</Label>
                  <Field name="game_name" component={Input} />
                </FormGroup>
              </div>
              <FormGroup>
                <Label htmlFor="how_to_play">How to play</Label>
                <Field name="how_to_play" component={Input} />
              </FormGroup>
              <SectionButton type="submit">Let&apos;s make it happen!</SectionButton>
            </Form>
          )}
        </Formik>
      </Modal>
    </HomeSection>
  )
}