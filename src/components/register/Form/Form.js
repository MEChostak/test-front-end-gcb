import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormWrapper } from "../../../styles/styles";
import { useCookies } from "react-cookie";

const validationPost = yup
  .object({
    name: yup.string().required("Required field"),
    birthdate: yup.string().required("Required field"),
    cpf: yup.string().required("Required field"),
    cep: yup
      .string()
      .required("Required field")
      .max(9, "Cep must be at most 9 characters")
      .min(8, "Cep must be at least 8 characters"),
    address: yup.string().required("Required field"),
    city: yup.string().required("Required field"),
    state: yup.string().required("Required field"),
  })
  .required();

const Form = () => {
  const [setCookie] = useCookies(["data"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  /* CONSULTA ENDEREÇO */
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(` https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("address", data.logradouro);
        setValue("city", data.localidade);
        setValue("state", data.uf);
      });
  };

  /* ARMAZENA EM LOCALSTORAGE & COOKIES */
  const storageData = (data) => {
    setCookie("data", data, { path: "/" });
    localStorage.setItem("form", JSON.stringify(data));
    alert("You have been registered!");
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(storageData)}>
        <div className='fields'>
          <label>Name</label>
          <div>
            <input
            style={{
              fontSize: 16,
              fontFamily: "Mulish",
              fontWeight: "normal",
              color: "gray",
              paddingRight: 10,
            }}
              type='text'
              placeholder='Name'
              name='name'
              {...register("name")}
            />
            <span
              style={{ marginTop: -15, marginLeft: 12 }}
              className='error-message'>
              {errors.name?.message}
            </span>
          </div>
        </div>
        <div className='fields'>
          <label>Date of birth</label>
          <div>
            <input
              style={{
                fontSize: 16,
                fontFamily: "Mulish",
                fontWeight: "normal",
                color: "gray",
                paddingRight: 10,
              }}
              type='date'
              placeholder='Date'
              name='birthdate'
              {...register("birthdate")}
            />
            <span
              style={{ marginTop: -15, marginLeft: 12 }}
              className='error-message'>
              {errors.birthdate?.message}
            </span>
          </div>
        </div>
        <div className='fields'>
          <label>CPF</label>
          <div>
            <input
            style={{
              fontSize: 16,
              fontFamily: "Mulish",
              fontWeight: "normal",
              color: "gray",
              paddingRight: 10,
            }}
              type='text'
              placeholder='CPF'
              name='cpf'
              {...register("cpf")}
            />
            <span
              style={{ marginTop: -15, marginLeft: 12 }}
              className='error-message'>
              {errors.cpf?.message}
            </span>
          </div>
        </div>
        <div className='fields'>
          <label>Zip code</label>
          <div>
            <input
            style={{
              fontSize: 16,
              fontFamily: "Mulish",
              fontWeight: "normal",
              color: "gray",
              paddingRight: 10,
            }}
              type='text'
              name='cep'
              {...register("cep")}
              onBlur={checkCEP}
              placeholder='ex.: 68908-642'
            />
            <span
              style={{ marginTop: -15, marginLeft: 12 }}
              className='error-message'>
              {errors.cep?.message}
            </span>
          </div>
        </div>
        <div className='fields'>
          <label>Address</label>
          <div>
            <input
            style={{
              fontSize: 16,
              fontFamily: "Mulish",
              fontWeight: "normal",
              color: "gray",
              paddingRight: 10,
            }}
              type='text'
              name='address'
              placeholder='Address'
              readOnly
              {...register("address")}
            />
            <span
              style={{ marginTop: -15, marginLeft: 12 }}
              className='error-message'>
              {errors.address?.message}
            </span>
          </div>
        </div>
        <div className='fields'>
          <label>City</label>
          <div>
            <input
            style={{
              fontSize: 16,
              fontFamily: "Mulish",
              fontWeight: "normal",
              color: "gray",
              paddingRight: 10,
            }}
              type='text'
              placeholder='City'
              name='city'
              readOnly
              {...register("city")}
            />
            <span
              style={{ marginTop: -15, marginLeft: 12 }}
              className='error-message'>
              {errors.city?.message}
            </span>
          </div>
        </div>
        <div className='fields'>
          <label>State</label>
          <div>
            <input
            style={{
              fontSize: 16,
              fontFamily: "Mulish",
              fontWeight: "normal",
              color: "gray",
              paddingRight: 10,
            }}
              type='text'
              placeholder='State'
              name='state'
              readOnly
              {...register("state")}
            />
            <span
              style={{ marginTop: -15, marginLeft: 12 }}
              className='error-message'>
              {errors.state?.message}
            </span>
          </div>
        </div>
        <input type='submit' value='Register' className='button-submit' />
      </form>
    </FormWrapper>
  );
};

export default Form;
