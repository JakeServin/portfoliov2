"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useStore } from "@/store";
import { z } from "zod";
import axios from "axios";
import { toast } from "./ui/use-toast";
import Image from "next/image";

export const loginSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
	subject: z.string().min(1, { message: "Subject is required" }),
	message: z.string().min(1, { message: "Message is required" }),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;

const Contact = () => {
	const contactRef = useRef<null | HTMLElement>(null);
	const [submitting, setSubmitting] = useState(false)
	const { setRef } = useStore();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<LoginFormInputs>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
		setSubmitting(true)
		axios.defaults.headers.post["Content-Type"] = "application/json";
		axios
			.post("https://formsubmit.co/ajax/jakeservin@gmail.com", {
				...data,
			})
			.then((response) => {
				setSubmitting(false)
				reset();
				toast({ title: "Message Sent", description: "Looking forward to getting back to you soon!", className: "bg-emerald-400 text-white border-0"})
			})
			.catch((error) => 
				toast({ title: "Error", description: "Something went wrong", className: "bg-red-500"})
			);
	};

	useEffect(() => {
		setRef("contactRef", contactRef);
	}, []);

	return (
		<section
			ref={contactRef}
			id="contact"
			className="bg-accent py-10 flex justify-center"
		>
			<form
				className="bg-white rounded-xl p-5 mx-5 w-full md:w-2/3 shadow-xl"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="text-2xl font-semibold">
					Let&apos;s work together
				</div>
				<div className="flex flex-col gap-2 mt-4 ">
					<Input
						placeholder="Your Name"
						className={`text-base`}
						{...register("name")}
					/>
					<div className="text-red-500 text-xs">
						{errors.name && errors.name.message}
					</div>
					<Input
						placeholder="Your Email"
						className="text-base"
						{...register("email")}
					/>
					<div className="text-red-500 text-xs">
						{errors.email && errors.email.message}
					</div>
					<Input
						placeholder="Subject"
						className="text-base"
						{...register("subject")}
					/>
					<div className="text-red-500 text-xs">
						{errors.subject && errors.subject.message}
					</div>
					<Textarea
						placeholder="Message"
						className="text-base"
						{...register("message")}
					/>
					<div className="text-red-500 text-xs">
						{errors.message && errors.message.message}
					</div>
				</div>
				<div className="w-full mt-4">
					<Button
						type="submit"
						className="w-full"
						disabled={submitting}
					>
						{submitting && (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="w-6 h-6 mr-2 animate-spin"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
						)}
						{!submitting && (
							<>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 mr-2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
									/>
								</svg>
								Send
							</>
						)}
					</Button>
				</div>
			</form>
		</section>
	);
};

export default Contact;
