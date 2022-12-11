import { Api } from "../axios-config";

const createLink = async ():Promise<any | Error> => {
    try {
        const { data } = await Api.post("/agendas");

        if (data) {
            return data;
        }

        return new Error("Errro ao criar o link.");
    } catch (error) {
        console.log(error);
        return new Error((error as {message: string}).message || "Erro ao listar os registros");
    }
};

export const ReuniaoService = {
    createLink
}