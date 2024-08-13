import React from 'react';

// 메달 입력 폼 컴포넌트
const MedalForm = ({
    formState,            // 폼의 현재 상태 (국가명, 금/은/동메달 수)
    handleChange,         // 입력 필드의 값이 변경될 때 호출되는 함수
    handleAddCountry,     // 국가 추가 버튼 클릭 시 호출되는 함수
    handleUpdateCountry   // 업데이트 버튼 클릭 시 호출되는 함수
}) => {
    const { country, gold, silver, bronze } = formState;

    return (
        <form className="inputGroup">
            {/* 국가명 입력 필드 */}
            <label className="inputLabel">
                국가명
                <input
                    type="text"
                    name="country"
                    placeholder="국가 이름"
                    value={country}
                    onChange={handleChange}
                />
            </label>

            {/* 금메달 수 입력 필드 */}
            <label className="inputLabel">
                금메달
                <input
                    type="number"
                    name="gold"
                    placeholder="금메달"
                    value={gold}
                    onChange={handleChange}
                />
            </label>

            {/* 은메달 수 입력 필드 */}
            <label className="inputLabel">
                은메달
                <input
                    type="number"
                    name="silver"
                    placeholder="은메달"
                    value={silver}
                    onChange={handleChange}
                />
            </label>

            {/* 동메달 수 입력 필드 */}
            <label className="inputLabel">
                동메달
                <input
                    type="number"
                    name="bronze"
                    placeholder="동메달"
                    value={bronze}
                    onChange={handleChange}
                />
            </label>

            {/* 국가 추가 버튼 */}
            <button
                type="button"
                className="addButton"
                onClick={handleAddCountry}
            >
                국가 추가
            </button>

            {/* 국가 업데이트 버튼 */}
            <button
                type="button"
                className="updateButton"
                onClick={handleUpdateCountry}
            >
                업데이트
            </button>
        </form>
    );
};

export default MedalForm;
