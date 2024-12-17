import AdminCurrencyForm from "@/components/forms/AdminCurrencyForm";
import { db } from "@/db";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Separator } from "@/components/ui/separator";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import Confirm from "@/components/Confirm";
import { deleteCurrency } from "@/actions/currency";

const AdminCurency = async () => {
  const currencys = await db.currency.findMany();
  const session = await auth();
  return (
    <div>
      <AdminCurrencyForm title="Додати валюту" />

      <Separator />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>№</TableHead>
            <TableHead>Назва</TableHead>
            <TableHead>Код</TableHead>
            <TableHead className="text-right">Символ</TableHead>
            {session?.user?.role === "ADMIN" && (
              <TableHead className="text-right">Дії</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currencys.map((currency, index) => (
            <TableRow key={currency.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{currency.name}</TableCell>
              <TableCell>{currency.code}</TableCell>
              <TableCell className="text-right">{currency.symbol}</TableCell>
              {session?.user?.role === "ADMIN" && (
                <TableCell className="text-right flex gap-2 justify-end">
                  <AdminCurrencyForm
                    title={<Pencil />}
                    edit={true}
                    data={currency}
                    id={currency.id}
                  />
                  <Confirm
                    title={<Trash2 />}
                    actionButtonTitle="Видалити"
                    fn={deleteCurrency}
                    id={currency.id}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminCurency;
