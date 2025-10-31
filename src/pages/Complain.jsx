import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";

export default function Complain() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 700));
    alert("Complain has been Registered by: " + data.name);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="max-w-md mx-auto mt-5 p-5 rounded-lg border border-gray-200 bg-white shadow-sm 
                 hover:drop-shadow-2xl hover:translate-y-2  "

    >
   
      <div className="text-center mb-5 pb-3">
        <div className="flex justify-center items-center mb-2">
          <img src={logo} alt="PickBazar Logo" className="h-28 w-auto object-contain" />
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 text-center f-[raleway]">REGISTER COMPLAIN</h2>

    
      <label className="block mt-2 font-semibold text-sm">Full name</label>
      <input
        {...register("name", {
          required: "Name is required",
          minLength: { value: 2, message: "Name must be at least 3 characters" },
        })}
        placeholder="e.g. Yahya Shah"
        className="w-full mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
      />
      {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}

   
      <label className="block mt-3 font-semibold text-sm">Email</label>
      <input
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
        })}
        placeholder="address@example.com"
        className="w-full mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
      />
      {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}

 
      <label className="block mt-3 font-semibold text-sm">Write Complain</label>
      <textarea
        {...register("complain", {
          required: "Write Your Complain",
        })}
        placeholder="Text......"
        rows="3"
        className="w-full mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
      />
      {errors.complain && <p className="text-red-600 text-xs mt-1">{errors.complain.message}</p>}

   
      <label className="flex items-center gap-2 mt-3 font-medium text-sm">
        <input
          type="checkbox"
          {...register("terms", { required: "You must accept the terms" })}
          className="h-4 w-4"
        />
        I accept the terms & conditions
      </label>
      {errors.terms && <p className="text-red-600 text-xs mt-1">{errors.terms.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-4 bg-[#3bb3b8] text-white font-semibold py-2 rounded-lg 
         hover:bg-[#5bd7dd] active:bg-[#4cc4ca] transition-all"
      >
        {isSubmitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
}
