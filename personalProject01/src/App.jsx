import { useState } from "react";
import "./App.css";
import MedalForm from "./MedalForm";

function App() {
  // 전체 국가 목록과 메달 입력 폼의 상태를 관리하는 상태 변수들
  const [countries, setCountries] = useState([]); // 등록된 국가들의 배열
  const [formState, setFormState] = useState({
    country: "", // 국가명
    gold: 0, // 금메달 수
    silver: 0, // 은메달 수
    bronze: 0, // 동메달 수
  });

  // 입력 필드의 값을 업데이트하는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    // 입력된 값을 폼 상태에 반영 (숫자는 Number로 변환)
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === "country" ? value : Number(value),
    }));
  };

  // 국가를 목록에 추가하는 함수
  const handleAddCountry = (event) => {
    event.preventDefault();

    // 중복된 국가인지 확인
    if (countries.some((c) => c.country === formState.country)) {
      alert("이미 등록된 국가입니다.");
      return;
    }

    // 새로운 국가 객체 생성 및 추가
    const newCountry = { id: Date.now(), ...formState };
    setCountries((prevCountries) => [...prevCountries, newCountry]);

    // 입력 필드 초기화
    resetForm();
  };

  // 기존 국가의 메달 정보를 업데이트하는 함수
  const handleUpdateCountry = (event) => {
    event.preventDefault();
    const { country } = formState;

    // 국가가 이미 목록에 있는지 확인
    const existingCountry = countries.find((c) => c.country === country);

    if (existingCountry) {
      // 목록을 업데이트
      setCountries((prevCountries) =>
        prevCountries.map((c) =>
          c.country === country ? { ...c, ...formState } : c,
        ),
      );
      resetForm();
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  };

  // 국가를 목록에서 삭제하는 함수
  const handleDeleteCountry = (id) => {
    setCountries((prevCountries) => prevCountries.filter((c) => c.id !== id));
  };

  // 입력 필드를 초기 상태로 되돌리는 함수
  const resetForm = () => {
    setFormState({ country: "", gold: 0, silver: 0, bronze: 0 });
  };

  // 국가 목록을 금메달 수에 따라 내림차순으로 정렬
  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold);

  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>

      {/* 메달 입력 폼 컴포넌트 */}
      <MedalForm
        formState={formState}
        handleChange={handleChange}
        handleAddCountry={handleAddCountry}
        handleUpdateCountry={handleUpdateCountry}
      />

      {/* 조건부 렌더링: 국가 목록이 비어있으면 안내 메시지 출력 */}
      {countries.length === 0 ? (
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {/* 정렬된 국가 목록을 테이블 행으로 출력 */}
            {sortedCountries.map((country) => (
              <tr key={country.id}>
                <td>{country.country}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <td>
                  <button onClick={() => handleDeleteCountry(country.id)}>
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
