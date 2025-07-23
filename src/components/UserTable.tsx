import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Button, Paper, Dialog, DialogTitle, DialogActions
} from '@mui/material';
import type { User } from '../generated/graphql';
 
type Props = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
  deletingUserId?: number | null;
};
 
const UserTable: React.FC<Props> = ({ users, onEdit, onDelete, deletingUserId }) => {
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
 
  const handleConfirmDelete = () => {
    if (confirmDeleteId !== null) {
      onDelete(confirmDeleteId);
      setConfirmDeleteId(null);
    }
  };
 
  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button onClick={() => onEdit(user)}>Edit</Button>
                  <Button
                    color="error"
                    onClick={() => setConfirmDeleteId(user.id)}
                    disabled={deletingUserId === user.id}
                  >
                    {deletingUserId === user.id ? 'Deleting...' : 'Delete'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
 
      <Dialog open={confirmDeleteId !== null} onClose={() => setConfirmDeleteId(null)}>
        <DialogTitle>Are you sure you want to delete this user?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setConfirmDeleteId(null)}>Cancel</Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
 
export default UserTable;
 