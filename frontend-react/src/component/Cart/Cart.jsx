import { Box, Button, Card, Divider, Grid, Modal, TextField } from "@mui/material";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const items = [1,1,1,1]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  outline: "none",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const initialValues={
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
}
const validationSchema = Yup.object().shape({
  streetAddress:Yup.string().required("Street address is required"),
  state:Yup.string().required("State address is required"),
  pincode:Yup.string().required("Pin code  is required"),
  city:Yup.string().required("City is required")
})



export default function Cart() {
  const createOrderUsingSelectedAddress = () => {}
  const handleOpenAddressModel = () => {setOpen(true)}
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {setOpen(false)};
  const handleSubmit = (values) => {console.log("form value", values)};

  return (
    <>
        <main className="lg:flex justify-between">
            <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
              {items.map(() => (
                <CartItem/>
              ))}
            <Divider/>
            <div className="billDetails px-5 text-sm">
                <p className="font-extralight py-5">Bill Details</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-400">
                    <p>Item Total</p>
                    <p>$599</p>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <p>Deliver Fee</p>
                    <p>$20</p>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <p>GST</p>
                    <p>$30</p>
                  </div>
                  <Divider/>
                </div>
                <div className="flex justify-between text-gray-400">
                  <p>Total pay</p>
                  <p>$3300</p>
                </div>
            </div>
            </section>
            <Divider orientation="vertical" flexItem/>
            <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
              <div>
                <h1 className="text-center font-semibold text-2xl py-10">
                  Choose Delivery Address
                </h1>
                <div className="flex gap-5 flex-wrap justify-center">
                  {[1,1,1,1,1].map((item) => (
                    <AddressCard handleSelectAddress={createOrderUsingSelectedAddress}/>
                  ))}
                  <Card className="flex gap-5 w-64 p-5">
                    <AddLocationIcon/>
                    <div className="space-y-3 text-gray-500">
                        <h1 className="font-semibold text-lg text-white">Add New Address</h1>
                        <Button variant="outlined" fullWidth onClick={handleOpenAddressModel}>Add</Button>
                    </div>
                  </Card>
                </div>
              </div>
            </section>
        </main>
        <Button onClick={handleOpenAddressModel}>Open Child Modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style}}>
            <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={1}>
                      <Field
                        as = {TextField}
                        name="streetAddress"
                        label="Street Address"
                        fullWidth
                        variant="outlined"
                        error={touched.streetAddress && Boolean(errors.streetAddress)}
                        helperText={<ErrorMessage name="streetAddress" component="span" className="text-red-600" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as = {TextField}
                        name="state"
                        label="state"
                        fullWidth
                        variant="outlined"
                        error={touched.streetAddress && Boolean(errors.streetAddress)}
                        helperText={<ErrorMessage name="streetAddress" component="span" className="text-red-600" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as = {TextField}
                        name="city"
                        label="city"
                        fullWidth
                        variant="outlined"
                        error={touched.streetAddress && Boolean(errors.streetAddress)}
                        helperText={<ErrorMessage name="streetAddress" component="span" className="text-red-600" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as = {TextField}
                        name="pincode"
                        label="pincode"
                        fullWidth
                        variant="outlined"
                        error={touched.streetAddress && Boolean(errors.streetAddress)}
                        helperText={<ErrorMessage name="streetAddress" component="span" className="text-red-600" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" type="submit" color="primary">Deliver here</Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Box>
        </Modal>
    </>
  )
}