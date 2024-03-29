import { reactive, ref } from "vue";

export const store = reactive({
	correccion: {},
	dificultad: 0, // 0, 1=basico, 2=medio, 3=avanzado
	juego: 0, // 0, 1=pindaro, 2=rima, 3=cat-acentual
	user: "Invitado",
	email: null,
	curso: null,
	token: null,
	question_order: [],
	scrollY: 0,
});
