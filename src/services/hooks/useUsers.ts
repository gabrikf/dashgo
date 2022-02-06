import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

interface IUsersRequest {
  users: IUser[];
}

interface IUser {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

export async function getUsers(page: number) {
  const { data, headers } = await api.get<IUsersRequest>(
    "http://localhost:3000/api/users",
    {
      params: {
        page,
      },
    }
  );
  const users = data.users.map((user) => {
    return {
      ...user,
      createdAt: new Date(user.created_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  const totalCount = Number(headers["x-total-count"]);
  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number, options: UseQueryOptions) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 1 segundo * 60 = 1 minuto * 10 = 10 min,
    ...options,
  });
}
