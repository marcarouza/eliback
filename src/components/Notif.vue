<template>
	<transition name="fade">
		<div v-if="show" class="notification" :class="type" role="alert">
			<div class="notification-content">
				{{ message }}
			</div>
			<button
				@click="closeNotification"
				type="button"
				class="btn-close"
				aria-label="Close"
			></button>
		</div>
	</transition>
</template>

<script>
import {ref, watch} from 'vue';

export default {
	name: 'Notif',
	props: {
		message: {
			type: String,
			required: true,
		},
		duration: {
			type: Number,
			default: 5000,
		},
		type: {
			type: String,
			default: 'info',
			validator: (value) =>
				['info', 'success', 'warning', 'error'].includes(value),
		},
	},
	emits: ['close'],
	setup(props, {emit}) {
		const show = ref(false);

		const closeNotification = () => {
			show.value = false;
			emit('close');
		};

		watch(
			() => props.message,
			(newVal) => {
				if (newVal) {
					show.value = true;
					if (props.duration > 0) {
						setTimeout(() => {
							closeNotification();
						}, props.duration);
					}
				}
			}
		);

		return {
			show,
			closeNotification,
		};
	},
};
</script>

<style scoped>
.notification {
	position: fixed;
	top: 20px;
	right: 20px;
	padding: 15px 20px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 300px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 1050;
}

.notification-content {
	margin-right: 15px;
}

.info {
	background: linear-gradient(135deg, #3498db, #2980b9);
	color: white;
}

.success {
	background: linear-gradient(135deg, #2ecc71, #27ae60);
	color: white;
}

.warning {
	background: linear-gradient(135deg, #f1c40f, #f39c12);
	color: white;
}

.error {
	background: linear-gradient(135deg, #e74c3c, #c0392b);
	color: white;
}

.btn-close {
	background: transparent;
	border: none;
	color: white;
	font-size: 1.5rem;
	cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
