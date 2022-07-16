import { Fragment } from 'react';
import { useMutation } from 'react-query';
import { Dialog, Transition, Switch } from '@headlessui/react';
import { Field, Form, Formik } from 'formik';

import GoogleIconSquared from 'src/assets/svgs/GoogleIconSquared.svg';
import Logo from 'src/assets/svgs/logo.svg';
import FacebookIconSquared from 'src/assets/svgs/FacebookIconSquared.svg';
import { loginSchema } from 'src/validations';
import { login, LoginData } from 'src/api/auth';
import { useLocalStorage } from 'src/hooks';

import { TextField } from '../TextField';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const { setStorage } = useLocalStorage();
  const { mutate } = useMutation(login, {
    onSuccess(data) {
      setStorage('token', data.token);

      onClose();
    },
  });
  const handleSubmit = (body: LoginData) => {
    mutate(body);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                <div className="mb-6">
                  <Dialog.Title className="flex flex-col items-center">
                    <Logo />
                  </Dialog.Title>
                  <Dialog.Description className="mt-3 flex flex-col items-center text-gray-500">
                    Login with your email & password
                  </Dialog.Description>
                </div>
                <Formik
                  initialValues={{ username: '', password: '' }}
                  onSubmit={handleSubmit}
                  validationSchema={loginSchema}
                  validateOnBlur
                >
                  {() => (
                    <Form className="flex flex-col gap-4">
                      <Field
                        name="username"
                        label="Username"
                        component={TextField}
                      />
                      <Field
                        name="password"
                        label="Password"
                        type="password"
                        component={TextField}
                      />
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <Switch.Group>
                            <Switch
                              checked={false}
                              onChange={() => {}}
                              className={`${
                                false ? 'bg-blue-600' : 'bg-gray-200'
                              } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                              <span className="sr-only text-sm ">
                                Enable notifications
                              </span>
                              <span
                                className={`${
                                  false ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white`}
                              />
                            </Switch>
                            <Switch.Label className="mr-4 ml-2 text-sm">
                              Remember me
                            </Switch.Label>
                          </Switch.Group>
                        </div>
                        <button type="button" className="text-sm underline">
                          Forgot password?
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="mt-5 w-full rounded-md bg-neutral-800 py-3 px-8 text-sm text-white"
                      >
                        Login
                      </button>
                    </Form>
                  )}
                </Formik>
                <div className="relative mt-6 mb-3.5 flex flex-col items-center justify-center text-sm ">
                  <hr className="w-full border-gray-300" />
                  <span className="absolute -top-2.5 bg-white px-2">Or</span>
                </div>
                <button
                  type="button"
                  className="bg-facebok mt-4 flex w-full items-center justify-center gap-2 rounded-md py-3 px-8 text-sm text-white"
                >
                  <FacebookIconSquared className="text-base" />
                  <span>Login With Facebook</span>
                </button>
                <button
                  type="button"
                  className="bg-google mt-2 flex w-full items-center justify-center gap-2 rounded-md py-3 px-8 text-sm text-white"
                >
                  <GoogleIconSquared className="text-base" />
                  <span>Login With Google</span>
                </button>
                <div className="mt-6 text-center text-sm text-gray-500 ">
                  Dont have any account?
                  <button
                    type="button"
                    className="ml-1 text-sm font-bold text-black underline"
                  >
                    Register
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default LoginModal;
