"use client";

import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { DataTable } from "@/Components/Tables/DataTable";

type Permission = {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
};

interface PermissionsIndexProps {
  permissions: Permission[];
}

export default function PermissionsIndex({ permissions }: PermissionsIndexProps) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredData = React.useMemo(() => {
    if (!searchTerm) return permissions;
    return permissions.filter((perm) =>
      perm.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [permissions, searchTerm]);

  const columns: ColumnDef<Permission>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
          className="p-0"
        >
          ID
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => row.getValue("id"),
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
          className="p-0"
        >
          Name
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => row.getValue("name"),
    },
    {
      accessorKey: "guard_name",
      header: "Guard",
      cell: ({ row }) => {
        const data = row.getValue("guard_name")
        if(data == 'web') {
          return <span className="text-primary">Web</span>
        } 
        return <span className="text-accent">API</span>
      },
    },
    {
      accessorKey: "created_at",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
          className="p-0"
        >
          Created At
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("created_at"));
        return date.toLocaleString();
      },
    },
    {
      accessorKey: "updated_at",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
          className="p-0"
        >
          Updated At
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("updated_at"));
        return date.toLocaleString();
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const perm = row.original;
        return (
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => alert(`Edit ${perm.id}`)}>
              Edit
            </Button>
            <Button variant="destructive" onClick={() => alert(`Delete ${perm.id}`)}>
              Delete
            </Button>
          </div>
        );
      },
      enableHiding: false,
    },
  ];

  // Komponen "customFilter" yang akan ditampilkan di header kiri DataTable
  const filterElement = (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search name..."
        className="border rounded px-2 py-1"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Bisa tambah filter lain di sini, misalnya date range */}
    </div>
  );

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-4">Permissions</h1>
      <DataTable columns={columns} data={filteredData} customFilter={filterElement} />
    </DashboardLayout>
  );
}
