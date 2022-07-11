import styles from "../css/transaction.module.css";
import Navbar from "../components/navbar/navAuth";
import Bg from "../components/background/bg";

export default function Transaction() {
  return (
    <div>
      <Bg />
      <h1 className={styles.incoT}>Incoming Transaction</h1>
      <div className={styles.transactionTable}>
        <table>
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Evidence of transfer</th>
            <th>Product Purchased</th>
            <th>Total Payment</th>
            <th>Status Payment</th>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
          </tr>
          <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
          </tr>
        </table>
        <Navbar />
      </div>
    </div>
  );
}
