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

const AdminCurency = async () => {
  const currencys = await db.currency.findMany();
  return (
    <div>
      <AdminCurrencyForm />

      <Separator />

      <Table>
        
        <TableHeader>
          <TableRow>
            <TableHead>№</TableHead>
            <TableHead>Назва</TableHead>
            <TableHead>Код</TableHead>
            <TableHead className="text-right">Символ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currencys.map((currency, index) => (
            <TableRow key={currency.id}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{currency.name}</TableCell>
              <TableCell>{currency.code}</TableCell>
              <TableCell className="text-right">{currency.symbol}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminCurency;
