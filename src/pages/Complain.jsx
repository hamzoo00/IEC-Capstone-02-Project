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

  const COLORS = {
    primary: '#FF6B35',
    secondary: '#735343',
    background: '#FBF7F3',
    inputBorder: '#CFC6C1',
    text: '#1E1E1E',
    error: '#D14343'
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="max-w-md mx-auto mt-5 p-5 rounded-lg border shadow-sm"
      style={{ backgroundColor: COLORS.background, borderColor: COLORS.secondary }}
    >
      <div className="text-center mb-5 pb-3">
        <div className="flex justify-center items-center mb-2">
          <img src={logo} alt="PickBazar Logo" className="h-28 w-auto object-contain" />
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 text-center" style={{ color: COLORS.text }}>REGISTER COMPLAIN</h2>

      <label className="block mt-2 font-semibold text-sm" style={{ color: COLORS.text }}>Full name</label>
      <input
        {...register("name", {
          required: "Name is required",
          minLength: { value: 2, message: "Name must be at least 3 characters" },
        })}
        placeholder="e.g. Yahya Shah"
        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring"
        style={{ borderColor: COLORS.inputBorder }}
      />
      {errors.name && <p className="text-xs mt-1" style={{ color: COLORS.error }}>{errors.name.message}</p>}

      <label className="block mt-3 font-semibold text-sm" style={{ color: COLORS.text }}>Email</label>
      <input
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
        })}
        placeholder="address@example.com"
        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring"
        style={{ borderColor: COLORS.inputBorder }}
      />
      {errors.email && <p className="text-xs mt-1" style={{ color: COLORS.error }}>{errors.email.message}</p>}

      <label className="block mt-3 font-semibold text-sm" style={{ color: COLORS.text }}>Write Complain</label>
      <textarea
        {...register("complain", {
          required: "Write Your Complain",
        })}
        placeholder="Text......"
        rows="3"
        className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring"
        style={{ borderColor: COLORS.inputBorder }}
      />
      {errors.complain && <p className="text-xs mt-1" style={{ color: COLORS.error }}>{errors.complain.message}</p>}

      <label className="flex items-center gap-2 mt-3 font-medium text-sm" style={{ color: COLORS.text }}>
        <input
          type="checkbox"
          {...register("terms", { required: "You must accept the terms" })}
          className="h-4 w-4"
        />
        I accept the terms & conditions
      </label>
      {errors.terms && <p className="text-xs mt-1" style={{ color: COLORS.error }}>{errors.terms.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-4 font-semibold py-2 rounded-lg transition-all"
        style={{
          backgroundColor: COLORS.primary,
          color: '#fff',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = COLORS.secondary}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = COLORS.primary}
      >
        {isSubmitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
}
