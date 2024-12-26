<template>
	<div class="container py-3">
		<!-- Contact form-->
		<div class="bg-light rounded-4 py-5 px-4 px-md-5">
			<div class="text-center mb-5">
				<div
					class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"
				>
					<i class="bi bi-envelope"></i>
				</div>
				<h1 class="fw-bolder">Parlons de votre projet web</h1>
				<div
					class="badge bg-gradient-primary-to-secondary text-white mb-4"
				>
					<div class="text-uppercase">
						&nbsp Formations &nbsp · &nbsp Développement &nbsp
						· &nbsp application web &nbsp
					</div>
				</div>
				<p class="lead fw-normal text-muted mb-0">
					et travaillons ensemble
				</p>
			</div>

			<div class="row gx-5 justify-content-center">
				<div class="col-lg-8 col-xl-6">
					<form id="contactForm" @submit.prevent="submitForm">
						<div class="form-floating mb-3">
							<input
								v-model="form.lastname"
								name="lastname"
								class="form-control"
								id="lastname"
								type="text"
								placeholder="nom"
								required
							/>
							<label for="lastname">nom</label>
							<div class="invalid-feedback">
								votre nom doit être renseigné
							</div>
						</div>
						<div class="form-floating mb-3">
							<input
								v-model="form.firstname"
								name="firstname"
								class="form-control"
								id="firstname"
								type="text"
								placeholder="prénom"
								required
							/>
							<label for="firstname">prénom</label>
							<div class="invalid-feedback">
								votre prénom doit être renseigné
							</div>
						</div>
						<div class="form-floating mb-3">
							<input
								v-model="form.email"
								name="email"
								class="form-control"
								id="email"
								type="email"
								placeholder="Email"
								required
							/>
							<label for="email">Email</label>
							<div class="invalid-feedback">
								votre Email doit être renseigné
							</div>
							<div class="invalid-feedback">
								Email invalide
							</div>
						</div>
						<div class="d-flex mb-3">
							<select
								v-model="form.code"
								class="form-select small-caps"
								id="countryCode"
								required
								style="width: auto"
							>
								<option value="+49">🇩🇪(+49)</option>
								<option value="+43">🇦🇹(+43)</option>
								<option value="+32">🇧🇪(+32)</option>
								<option value="+359">🇧🇬(+359)</option>
								<option value="+357">🇨🇾(+357)</option>
								<option value="+45">🇩🇰(+45)</option>
								<option value="+372">🇪🇪(+372)</option>
								<option value="+34">🇪🇸(+34)</option>
								<option value="+358">🇫🇮(+358)</option>
								<option value="+33" selected>
									🇫🇷(+33)
								</option>
								<option value="+30">🇬🇷(+30)</option>
								<option value="+36">🇭🇺(+36)</option>
								<option value="+354">🇮🇸(+354)</option>
								<option value="+972">🇮🇱(+972)</option>
								<option value="+353">🇮🇪(+353)</option>
								<option value="+39">🇮🇹(+39)</option>
								<option value="+371">🇱🇻(+371)</option>
								<option value="+370">🇱TU(+370)</option>
								<option value="+352">🇱UX(+352)</option>
								<option value="+356">🇲🇹(+356)</option>
								<option value="+31">🇳🇱(+31)</option>
								<option value="+351">🇵🇹(+351)</option>
								<option value="+420">🇨🇿(+420)</option>
								<option value="+41">🇨🇭(+41)</option>
								<option value="+44">🇬🇧(+44)</option>
							</select>

							<input
								v-model="form.mobile"
								name="mobile"
								class="form-control"
								id="mobile"
								type="text"
								placeholder="tél. mobile"
								minlength="10"
								maxlength="20"
								required
							/>
						</div>

						<div class="form-floating mb-3">
							<select
								v-model="form.subject"
								name="subject"
								class="form-select"
								id="subject"
								required
							>
								<option value="" selected disabled>
									Choisir l'objet du message
								</option>
								<option value="job">
									formations (je suis un particulier)
								</option>
								<option value="job">
									formations (centre de formation)
								</option>
								<option value="compte">
									projet web
								</option>
								<option value="compte">
									poser une question
								</option>
								<option value="autre">
									autre (précisez dans votre mesage)
								</option>
							</select>

							<label for="subject">Objet du message</label>
							<div class="invalid-feedback">
								Veuillez sélectionner un objet pour
								votre message
							</div>
						</div>

						<div class="form-floating mb-3">
							<textarea
								v-model="form.message"
								name="message"
								minlength="20"
								maxlength="999"
								class="form-control"
								id="votreMessage"
								placeholder="votre message"
								style="height: 10rem"
								required
							></textarea>
							<label for="votreMessage"
								>votre message / question</label
							>
							<div class="invalid-feedback">
								votre message doit être renseigné
							</div>
						</div>
						<div class="d-grid">
							<button
								class="btn btn-primary btn-lg"
								id="submitButton"
								type="submit"
							>
								<i class="bi bi-send"></i>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContactForm',
	data() {
		return {
			form: {
				firstname: '',
				lastname: '',
				email: '',
				code: '+33', // Default
				mobile: '',
				subject: '',
				message: '',
			},
		};
	},
	components: {},
	methods: {
		async submitForm() {
			if (
				this.form.firstname &&
				this.form.lastname &&
				this.form.email &&
				this.form.mobile &&
				this.form.subject &&
				this.form.message
			) {
				try {
					const response = await fetch(
						'https://eli-back.onrender.com//api/contactFormPost',
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(this.form),
						}
					);

					if (!response.ok) {
						throw new Error(
							'😱 😱 😱 FROM CONTACT PAGE FETCH =>  Failed to send (222)'
						);
					}

					const result = await response.json();
					console.log(
						'🤾 ✅ 🤾 FROM ContactForm => EMAIL sent successfully: ' +
							result.response
					);
					this.$router.push({name: 'confirmcontactpage'});
				} catch (error) {
					console.error(
						'🍌 🍌 🍌 🍌 🍌 FROM CONTACT PAGE FETCH => ERR sending email (234) : ' +
							error.message
					);
				}
			} else {
				alert('🍌 🍌 🍌 🍌 🍌 Veuillez remplir tous les champs');
			}
		},
	},
};
</script>

<style scoped>
/* Votre style ici */
</style>
