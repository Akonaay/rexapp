<template>
    <div id="wrapper">
        <!-- Contact Banner -->
        <section class="bg-contact position-relative">
            <div class="serve-overlay py-5">
                <div class="container text-white">
                    <h6 class="sub-title-1">Contact Us</h6>
                    <h3 class="hny-title two">Get in touch!</h3>
                </div>
            </div>
        </section>

        <!-- Address Icons -->
        <div class="container mt-3 mb-3">
            <div class="row">
                <div class="col-md-4">
                    <div class="contact-para contact-info-align">
                        <div class="icon">
                            <span class="fa fa-map-marker"></span>
                        </div>
                        <div>
                            <strong class="info">Address:</strong> P.O Box
                            38568,
                            <strong class="text-success"
                                >429 Mahando Street</strong
                            >, Msasani Peninsular, Dar es Salaam, Tanzania.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-info-align">
                        <div class="icon">
                            <span class="fa fa-phone"></span>
                        </div>
                        <div>
                            <strong class="info">Phone:</strong>
                            <a href="tel:+255 22 221 4145">+255 22 221 4145</a>

                            <!-- <a href="tel:+255 717 094 388">+255 717 094 388</a> -->
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-info-align">
                        <div class="icon">
                            <span class="fa fa-envelope-open-o"></span>
                        </div>
                        <div>
                            <strong class="info">Email:</strong>
                            <a href="mailto:info@rexreginalaw.com"
                                >info@rexreginalaw.com</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- /contact-form -->
        <section class="w3l-contact-main">
            <div class="contact-infhny py-3">
                <div class="container py-lg-3">
                    <div class="title-content text-left">
                        <h6 class="sub-title"></h6>
                        <h3 class="hny-title">
                            Drop your message for any info
                            <br />or question.
                        </h3>
                    </div>
                    <p class="text-center">{{ message }}</p>
                    <div class="row align-form-map">
                        <div class="col-lg-6 form-inner-cont">
                            <form
                                autocomplete="on"
                                @submit.prevent="add"
                                class="signin-form"
                            >
                                <div class="form-input">
                                    <label for="w3lName">Name*</label>
                                    <input
                                        type="text"
                                        name="w3lName"
                                        id="w3lName"
                                        v-model="form.w3lName"
                                        placeholder
                                    />
                                </div>
                                <div class="form-input">
                                    <label for="w3lSender">Email*</label>
                                    <input
                                        type="email"
                                        name="w3lSender"
                                        id="w3lSender"
                                        v-model="form.w3lSender"
                                        placeholder
                                        required
                                    />
                                </div>

                                <div class="form-input">
                                    <label for="w3lMessage">Message*</label>
                                    <textarea
                                        placeholder
                                        name="w3lMessage"
                                        id="w3lMessage"
                                        v-model="form.w3lMessage"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" class="btn btn-contact">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div class="map col-lg-6 pl-lg-4 mt-3">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2274144927487!2d39.28336289584957!3d-6.742091492922428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4de6675bb419%3A0xf8dfed47b5d9269b!2sRex%26Regina%20Attorneys%20at%20Law!5e0!3m2!1sen!2stz!4v1595348587311!5m2!1sen!2stz"
                                frameborder="0"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer  -->
        <section class="w3l-footers-1">
            <div class="footer bg-secondary">
                <div class="container">
                    <div class="footer-content">
                        <div class="row">
                            <div class="col-lg-8 footer-left">
                                <p class="m-0">© Rex&Regina Attorneys At Law</p>
                            </div>
                            <div
                                class="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3"
                            >
                                <ul class="social m-0 p-0">
                                    <li>
                                        <a href="#facebook">
                                            <span class="fa fa-file"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#linkedin">
                                            <span class="fa fa-linkedin"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#twitter">
                                            <span class="fa fa-twitter"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Contact",
    data() {
        return {
            form: {
                w3lName: "",
                w3lSender: "",
                w3lMessage: ""
            },
            message: ""
        };
    },
    methods: {
        add() {
            axios
                .post("/api/quotes/store", this.form)
                .then(response => {
                    this.form = "";
                    this.message = "Message Sent!";
                })
                .catch(error => {
                    this.message = "Sorry try again later!";
                });
        }
    }
};
</script>
