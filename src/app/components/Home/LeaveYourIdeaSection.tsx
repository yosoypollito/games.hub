"use client"
import HomeSection from "./Section";
import SectionTitle from "./SectionTitle";
import SectionButton from "./SectionButton";

import Modal from "@/components/Modal";
import { useState } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import Label from "../Label";
import FormGroup from "../FormGroup";
import FormikInput from "../FormikInput";

import { toast, Toaster } from "react-hot-toast";



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
            toast("We are currently working in this feature, come back later!", {
              icon: "🚀",
            })
          }}
        >
          {(props: FormikProps<any>) => (
            <Form className="flex flex-col w-full gap-4 text-sm">
              <div className="flex gap-2">
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Field type="email" name="email" component={FormikInput} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="game_name">Game name</Label>
                  <Field name="game_name" component={FormikInput} />
                </FormGroup>
              </div>
              <FormGroup>
                <Label htmlFor="how_to_play">How to play</Label>
                <Field name="how_to_play" component={FormikInput} />
              </FormGroup>
              <SectionButton type="submit">Let&apos;s make it happen!</SectionButton>
            </Form>
          )}
        </Formik>
        <Toaster position="bottom-right" />
      </Modal>
    </HomeSection>
  )
}