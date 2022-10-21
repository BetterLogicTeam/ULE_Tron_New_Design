import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../Registration/Registration.css";
import './Login.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function FormDialog({ setRegistered, handleLogin }) {
  const nevigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    setRegistered(false);
  };
  const [accept, setAccept] = useState(false);

  return (
    <div>
      <ToastContainer />

      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        className="modalContainer"
      >
         <div class="modal-header25 mt-3 me-3" >
            <span class="close25 " style={{paddingBottom:'1.2rem',paddingTop:'0.7rem'}} >×</span>

         </div>
        <DialogTitle
          id="form-dialog-title"
          className="d-flex justify-content-center align-items-center "
          style={{ fontSize: "20px" }}
        >
         
          <span style={{ color: 'white' }}>
            Disclaimer
          </span>
         
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="mt-1 textStyle">
            You expressly understand that UleTron website is only the interface to interact with smart contracts
            on the blockchains
            namely "WYchain" & other 4 multi chains like Bsc, Poly & Tron etc. and agree that your use of UleTron
            website(s) is at your sole risk and that the services are provided
            "As is" and "As available" without warranty of any kind, either expressed or implied, that is not
            expressly stated in the official
            documentation. Additionally no advice or information, whether oral or written, obtained by you from
            members/participants of the UleTron
            community shall create any warranty that is not expressly stated in the official documentation. In no
            event shall be held
            liable to you or any third party for any damages including, but not limited to, indirect, special,
            incidental or consequential damages
            or other losses (including damages for loss of business, loss of profits, lost savings, business
            interruption or the like), arising from
            the use of website(s), customer products or external links and affiliate websites. You, your partners
            and any third parties, agree to
            indemnify and hold harmless UleTron from any damages claimed as a result of services, products,
            information and resources obtained from
            UleTron and/or in any event including, but not limited to, spam, account hacking, identity theft,
            virus attack, fraudulent or criminal
            activities (including real, perceived, probable or suspected fraud/crime). UleTron shall not be held
            liable based on any theory of liability
            including breach of contract, breach of warranty, tort (including negligence), product liability or
            otherwise, even if members of the UleTron
            community or its representatives have been advised of the possibility of such damages and even if a
            remedy set forth by UleTron is found to have
            failed of its essential purpose.
            <div class="terms">
              <input
                type="checkbox"
                checked={accept}
                onChange={(e) => setAccept(e.target.checked)}
                name=""
              />
              &nbsp; I agree and accept
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="d-flex justify-content-center align-items-center ">
          <Button
            disabled={!accept}
            onClick={() => handleLogin(true)}
            className="loginbtn lg-btn"
            // href="/dashboard"
            fullWidth
          >
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
